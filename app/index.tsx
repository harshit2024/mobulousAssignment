import React, { useRef, useState } from "react";
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Animated } from "react-native";
import FullScreenVideoModal from "./storyModal";
export interface IVideo {
    id: number;
    title: string;
    thumbnailUrl: string;
    duration: string;
    uploadTime: string;
    views: string;
    author: string;
    videoUrl: string;
    description: string;
    subscriber: string;
    isLive: boolean;
  }

  interface Story {
    story_id: number;
    story_url: string;
  }
  
  interface User {
    user_id: number;
    profile_url: string;
    stories: Story[];
  }
  
export const stories =[
    {
        "id": 0,
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": 1,
        "title": "The first Blender Open Movie from 2006",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": 2,
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    },
    {
        "id": 3,
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": 4,
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": 5,
        "title": "The first Blender Open Movie from 2006",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    },
    {
        "id": 6,
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": 7,
        "title": "The first Blender Open Movie from 2006",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": 8,
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    },
]

const users = [
    {
      user_id: 0,
      profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      stories: [
        {
          story_id: 0,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          story_id: 1,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
      ],
    },
    {
      user_id: 1,
      profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      stories: [
        {
          story_id: 0,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          story_id: 1,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
      ],
    },
    {
      user_id: 2,
      profile_url: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      stories: [
        {
          story_id: 0,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
        {
            story_id: 1,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
      ],
    },
    {
      user_id: 3,
      profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      stories: [
        {
          story_id: 0,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          story_id: 1,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          story_id: 2,
          story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
      ],
    },
    {
        user_id: 4,
        profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        stories: [
          {
            story_id: 0,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
          {
            story_id: 1,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
        ],
      },
      {
        user_id: 5,
        profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        stories: [
          {
            story_id: 0,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          },
          {
            story_id: 1,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        ],
      },
      {
        user_id: 6,
        profile_url: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        stories: [
          {
            story_id: 0,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
          {
              story_id: 1,
              story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
        ],
      },
      {
        user_id: 7,
        profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        stories: [
          {
            story_id: 0,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          },
          {
            story_id: 1,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
          {
            story_id: 2,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          },
        ],
      },
  ];
  
  console.log(users);
  


const StoryList = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [selectedUser, setSelectedUser] = useState<User|null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => {
        setIsModalVisible(true);
    };
    const closeModal = () => {
        setIsModalVisible(false);
    };
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        horizontal
        keyExtractor={(item) => item.user_id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <TouchableOpacity   onPress={()=>{setSelectedUser(item);  // Set the selected story to pass to the modal
            openModal()}} style={styles.storyContainer}>
            <View style={styles.storyWrapper}>
              <Image source={{ uri: item.profile_url }} style={styles.storyImage} />
            </View>
          </TouchableOpacity>
        )}
      />
      <FullScreenVideoModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        index={selectedUser ?selectedUser.user_id: 0} // Pass the index of the selected story
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10 ,marginTop: 30},
  storyContainer: { marginHorizontal: 8 },
  storyWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#ff8501", // Instagram-like gradient border
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default StoryList;
