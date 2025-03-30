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
  


  const users = [
    {
      user_id: 0,
      profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      stories: [
        {
          story_id: 0,
          story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743354178/Naruto_Baryon_Mode_-_Centuries_AMV_Edit_rh8myv.mp4",
        },
        {
          story_id: 1,
          story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/hq4j3eoaocfrmucnh3bx.mp4",
        },
      ],
    },
    {
      user_id: 1,
      profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      stories: [
        {
          story_id: 0,
          story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743353811/videoplayback_2_yk9ggv.mp4",
        },
        {
          story_id: 1,
          story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743354665/Itachi_s_death_vlskip.mp4",
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
            story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743354178/Naruto_Baryon_Mode_-_Centuries_AMV_Edit_rh8myv.mp4",
        },
      ],
    },
    {
      user_id: 3,
      profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      stories: [
        {
          story_id: 0,
          story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743354942/%E0%A4%86_%E0%A4%B0%E0%A4%B9%E0%A4%BE_%E0%A4%B9%E0%A5%82%E0%A4%81_%E0%A4%97%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AE_%E0%A4%94%E0%A4%B0_%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80_August_5th_-_Gurugram_and_August_6th_-_Delhi___www.ballimaaraan.com_tghid9.mp4",
        },
        {
          story_id: 1,
          story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743355057/videoplayback_3_gyhrz2.mp4",
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
            story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743355329/videoplayback_4_wihpdz.mp4",
          },
          {
            story_id: 1,
            story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743355057/videoplayback_3_gyhrz2.mp4",
          },
        ],
      },
      {
        user_id: 5,
        profile_url: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        stories: [
          {
            story_id: 0,
            story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/hq4j3eoaocfrmucnh3bx.mp4",
          },
          {
            story_id: 1,
            story_url: "https://res.cloudinary.com/dpnb4eo1a/video/upload/v1743354178/Naruto_Baryon_Mode_-_Centuries_AMV_Edit_rh8myv.mp4",
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
          {
            story_id: 3,
            story_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          },
        ],
      },
  ];

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
          <TouchableOpacity   onPress={()=>{setSelectedUser(item);  
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
        index={selectedUser ?selectedUser.user_id: 0} 
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
