import React, { useEffect, useRef, useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, PanResponder, Dimensions, TouchableWithoutFeedback, Image } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";

const users = [
    {
      user_id: 0,
      user_name:"InstaVibeX",
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
      user_name:"EchoSnap_10",
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
      user_name:"PixelNomad",
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
      user_name:"SkylineClicks",
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
        user_name:"NeonChronicles",
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
        user_name:"ViralFusion",
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
        user_name:"SnapTrekker",
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
        user_name:"RetroAura_98",
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

interface FullScreenVideoModalProps {
  isVisible: boolean;
  closeModal: () => void;
  index: number;
}

const { width } = Dimensions.get("window");

const FullScreenVideoModal = ({ isVisible, closeModal, index }: FullScreenVideoModalProps) => {
  const videoRef = useRef<Video | null>(null);
  const [userIndex, setUserIndex] = useState(index);
  const [storyIndex, setStoryIndex] = useState(0);
  console.log("userIndex", userIndex, index, storyIndex);
  
  // Track progress for each user separately
  const [userProgressMap, setUserProgressMap] = useState<Record<number, number[]>>({});
  
  const [duration, setDuration] = useState(1);
  const animationRef = useRef<number | null>(null);
  const previousUserIndexRef = useRef<number>(index);
  const previousStoryIndexRef = useRef<number>(0);

  // Initialize progress for a specific user
  const initializeUserProgress = (userIdx: number) => {
    if (!users[userIdx]) return;
    
    setUserProgressMap(prev => ({
      ...prev,
      [userIdx]: new Array(users[userIdx].stories.length).fill(0)
    }));
  };
  
  // Update progress for current user and story
  const updateProgressBar = (userIdx: number, storyIdx: number, value: number) => {
    setUserProgressMap((prev) => {
      const newUserProgress = { ...prev };
      
      if (!newUserProgress[userIdx]) {
        newUserProgress[userIdx] = new Array(users[userIdx].stories.length).fill(0);
      }
  
      const updatedProgress = [...newUserProgress[userIdx]];
  
      // Ensure previous stories remain 100%
      for (let i = 0; i < storyIdx; i++) {
        updatedProgress[i] = 100;
      }
  
      updatedProgress[storyIdx] = value;
      newUserProgress[userIdx] = updatedProgress;
  
      return newUserProgress;
    });
  };
  
  
  // Mark a story as complete (100%)
  const markStoryComplete = (userIdx: number, storyIdx: number) => {
    updateProgressBar(userIdx, storyIdx, 100);
  };
  
  // Reset progress for a specific user
  const resetUserProgress = (userIdx: number) => {
    if (!users[userIdx]) return;
    
    setUserProgressMap(prev => ({
      ...prev,
      [userIdx]: new Array(users[userIdx].stories.length).fill(0)
    }));
  };

  // When modal becomes visible or index changes
  useEffect(() => {
    if (isVisible) {
      setUserIndex(index);
      setStoryIndex(0);
      previousStoryIndexRef.current = 0;
      
      // Initialize progress for the initial user
      if (!userProgressMap[index]) {
        initializeUserProgress(index);
      }
    }
  }, [isVisible, index]);

  // When user changes
  useEffect(() => {
    if (previousUserIndexRef.current !== userIndex) {
      // Reset progress for the new user
      resetUserProgress(userIndex);
      previousUserIndexRef.current = userIndex;
      setStoryIndex(0);
      previousStoryIndexRef.current = 0;
    }
    
    if (videoRef.current) {
      videoRef.current.unloadAsync().then(() => {
        videoRef.current?.loadAsync(
          { uri: users[userIndex]?.stories[storyIndex].story_url },
          { shouldPlay: true }
        );
      });
    }
  }, [userIndex]);

  useEffect(() => {
    if (previousStoryIndexRef.current !== storyIndex && previousStoryIndexRef.current < storyIndex) {
      markStoryComplete(userIndex, previousStoryIndexRef.current);
    }
    previousStoryIndexRef.current = storyIndex; 
    if (videoRef.current && users[userIndex]?.stories[storyIndex]) {
      videoRef.current.unloadAsync().then(() => {
        videoRef.current?.loadAsync(
          { uri: users[userIndex].stories[storyIndex].story_url },
          { shouldPlay: true }
        );
      });
    }
  }, [storyIndex]);

  const updateProgress = async () => {
    if (!videoRef.current || !users[userIndex]) return;
  
    const status = await videoRef.current.getStatusAsync();
    if (status.isLoaded && status.durationMillis && status.positionMillis) {
      const progressValue = (status.positionMillis / status.durationMillis) * 100;
      updateProgressBar(userIndex, storyIndex, progressValue);
    }
  
    animationRef.current = requestAnimationFrame(updateProgress);
  };
  
  useEffect(() => {
    if (isVisible) {
      animationRef.current = requestAnimationFrame(updateProgress);
    }
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible, userIndex, storyIndex]);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    if (status.didJustFinish) {
      // Mark the current story as complete
      markStoryComplete(userIndex, storyIndex);
      
      if (storyIndex < users[userIndex]?.stories.length - 1) {
        setStoryIndex(prevIndex => prevIndex + 1);
      } else if (userIndex < users.length - 1) {
        setUserIndex(prevIndex => prevIndex + 1);
        setStoryIndex(0);
      } else {
        closeModal();
      }
    }
  };

  const panResponder = useRef(
    PanResponder.create({
        onStartShouldSetPanResponder: () => false, // Do not capture taps
        onMoveShouldSetPanResponder: (_, gestureState) => {
          return Math.abs(gestureState.dx) > 10 || Math.abs(gestureState.dy) > 10;
        },
        onPanResponderGrant: () => console.log("Touch started"),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx < -50) {
          // Mark current story as complete before moving to next user
          markStoryComplete(userIndex, storyIndex);
          
          
            setUserIndex((prevIndex) => (prevIndex + 1));
            setStoryIndex(0);
          
        } else if (gesture.dx > 50) {
          
            setUserIndex((prevIndex) => (prevIndex - 1));
            setStoryIndex(0);
         
        }
      },
    })
  ).current;

  const handleTap = (event: any) => {
    const { locationX } = event.nativeEvent;
    if (locationX < width / 2) {
      console.log("Left tap - Previous story");
      if(storyIndex === 0) {
        if(userIndex > 0){
          setUserIndex((prevIndex) => (prevIndex - 1));
          setStoryIndex(0);
        }
        else{
          closeModal();
        }
      }
      else{
        setStoryIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    } else {
      console.log("Right tap - Next story");
      markStoryComplete(userIndex, storyIndex);
      
      if(storyIndex === users[userIndex]?.stories.length - 1) {
        if(userIndex < users.length - 1) {
          setUserIndex((prevIndex) => (prevIndex + 1));
          setStoryIndex(0);
        }
        else{
          closeModal();
        }
      }
      else{
        setStoryIndex((prevIndex) => Math.min(prevIndex + 1, users[userIndex]?.stories?.length - 1));
      }
    }
  };

  // Get progress for current user safely
  const getCurrentUserProgress = () => {
    return userProgressMap[userIndex] || new Array(users[userIndex]?.stories?.length || 0).fill(0);
  };

  return (
    <Modal animationType="fade" onRequestClose={closeModal} transparent={false} visible={isVisible} style={styles.modalContainer}>
        <View style={styles.progressBarContainer}>
            {users[userIndex]?.stories?.map((_, index) => (
                <View key={index} style={styles.progressWrapper}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: `${getCurrentUserProgress()[index] || 0}%` }
                  ]} 
                />
                </View>
            ))}
            </View>
        <View style={styles.userContainer}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", padding: 10 }}>  
                <Image source={{ uri: users[userIndex]?.profile_url }} style={styles.storyImage} />
                <ThemedText style={{marginLeft:10}}>{users[userIndex]?.user_name}</ThemedText>
                
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems:"center"   }}>  
            <Feather name="volume-2" size={24} color="white" />
            <TouchableOpacity style={styles.closeButton} onPress={()=>closeModal()}>
                <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
            </View>
      </View>
      <View style={styles.modalContainer} {...panResponder.panHandlers}>
        
        <TouchableWithoutFeedback onPress={handleTap}>
        <View style={styles.video}>
        
        <Video
          key={`${userIndex}-${storyIndex}`}
          ref={videoRef}
          source={{ uri: users[userIndex]?.stories[storyIndex]?.story_url ? users[userIndex]?.stories[storyIndex].story_url : "" }}
          style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
        </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  video: {
    ...StyleSheet.absoluteFillObject, 
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"black",
  },
  closeButton: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 5,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 3,
    backgroundColor:"black",
  },
   progressWrapper: {
    flex: 1,
    height: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 2,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  touchArea: {
    width: "100%",
    height: "100%",
  },
});

export default FullScreenVideoModal;
