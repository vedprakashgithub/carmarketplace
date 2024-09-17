import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN;

// FormatResult: Groups car listings by their id and appends their associated images.
const FormatResult = (resp) => {
  let result = {};
  let finalResult = [];

  resp.forEach((item) => {
    const listingId = item.carListing?.id; // Fixed typo from carLisiting to carListing

    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing, // Access the car listing details
        images: [],
      };
    }

    // If carImages exist, add them to the listing
    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });

  // Convert the object result into an array for final result
  Object.values(result).forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });

  return finalResult;
};

// CreateSendBirdUser: Creates a user in SendBird
const CreateSendBirdUser = (userId, nickName, profileUrl) => {
  return axios.post(
    `https://api-${SendBirdApplicationId}.sendbird.com/v3/users`,
    {
      user_id: userId,
      nickname: nickName,
      profile_url: profileUrl,
      issue_access_token: false,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': SendBirdApiToken,
      },
    }
  );
};

// CreateSendBirdChannel: Creates a SendBird group channel
const CreateSendBirdChannel = (users, title) => {
  return axios.post(
    `https://api-${SendBirdApplicationId}.sendbird.com/v3/group_channels`,
    {
      user_ids: users,
      is_distinct: true,
      name: title,
      operator_ids: [users[0]], // Set the first user as the operator
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': SendBirdApiToken,
      },
    }
  );
};

export default {
  FormatResult,
  CreateSendBirdUser,
  CreateSendBirdChannel,
};
