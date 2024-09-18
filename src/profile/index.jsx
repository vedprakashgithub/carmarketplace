import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
import MyListing from './components/MyListing';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Inbox from './components/Inbox';
import User from './components/User';

function Profile() {
  return (
    <div>
      <Header />
      <div className="px-4 sm:px-10 md:px-20 my-8 sm:my-10">
        <Tabs defaultValue="my-listing" className="w-full">
          {/* Tabs List */}
          <TabsList className="w-full flex flex-col sm:flex-row sm:justify-start gap-2 sm:gap-6">
            <TabsTrigger value="my-listing" className="text-sm sm:text-base">
              My Listing
            </TabsTrigger>
            <TabsTrigger value="inbox" className="text-sm sm:text-base">
              Inbox
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-sm sm:text-base">
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>
          <TabsContent value="inbox">
            <Inbox />
          </TabsContent>
          <TabsContent value="profile">
            <User />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
