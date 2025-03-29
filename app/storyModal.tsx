import React, { useEffect, useRef, useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, PanResponder, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
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
  const [progress, setProgress] = useState<number[]>(() => 
    users[userIndex]?.stories.map(() => 0) || []
  );  
  const [duration, setDuration] = useState(1);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      setUserIndex(index);
        setProgress(users[index].stories.map(() => 0)); // Reset progress for the new user
        setStoryIndex(0); // Reset story index for the new user
    }
  }, [isVisible, index]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.unloadAsync().then(() => {
        videoRef.current?.loadAsync(
          { uri: users[userIndex].stories[0].story_url },
          { shouldPlay: true }
        );
        setProgress(users[index].stories.map(() => 0)); 
      });
    }
  }, [userIndex]);

  const updateProgress = async () => {
    if (!videoRef.current) return;
  
    const status = await videoRef.current.getStatusAsync();
    if (status.isLoaded && status.durationMillis && status.positionMillis) {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
  
        // Calculate progress for the current story
        const totalDuration = status.durationMillis; // Total duration of the story
        const storyProgress = totalDuration ? (status.positionMillis / totalDuration) * 100 : 0;
        
        newProgress[storyIndex] = storyProgress;
  
        return newProgress;
      });
  
      // Move to the next story if the current one is completed
      if (status.positionMillis >= status.durationMillis - 500) {
        if (storyIndex < users[userIndex].stories.length - 1) {
          setStoryIndex((prevIndex) => prevIndex + 1);
        } else {
          closeModal(); // Close modal when all stories are done
        }
      }
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
  }, [isVisible, userIndex]);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    if (status.didJustFinish) {
      setUserIndex((prevIndex) => (prevIndex + 1) );
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
            console.log("Swiped right - Next story");
            setUserIndex((prevIndex) => (prevIndex + 1));
            setStoryIndex(0); // Reset story index for the new user
        } else if (gesture.dx > 50) {
            console.log("Swiped left - Previous story");
            setUserIndex((prevIndex) => (prevIndex - 1 ));
            setStoryIndex(0); // Reset story index for the new user
           
        }
      },
    })
  ).current;

  const handleTap = (event: any) => {
    console.log("Tapped on video");
    const { locationX } = event.nativeEvent;
    if (locationX < width / 2) {
      // Left tap - Previous story
       console.log("Left tap - Previous story");
       setStoryIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      // Right tap - Next story
      console.log("Right tap - Next story");
      setStoryIndex((prevIndex) => Math.min(prevIndex + 1, users[userIndex].stories.length - 1));
    }
  };
//   progress[index]
  return (
    <Modal animationType="fade" onRequestClose={closeModal} transparent={false} visible={isVisible} style={styles.modalContainer}>
        <View style={styles.progressBarContainer}>
            {users[userIndex].stories.map((_, index) => (
                <View key={index} style={styles.progressWrapper}>
                <View style={[styles.progressBar, { width: `${ progress[storyIndex]* 100}%` }]} />
                </View>
            ))}
            </View>
        <View style={styles.userContainer}>
            <View  style={{ flexDirection: "row", justifyContent: "flex-start", padding: 10 }}>  
                <ThemedText>User Id:</ThemedText>
                <ThemedText>{users[userIndex].user_id}</ThemedText>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={()=>closeModal()}>
                <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
      </View>
      <View style={styles.modalContainer} {...panResponder.panHandlers}>
        
        {/* Progress Bar (Now updates continuously) */}
        <TouchableWithoutFeedback onPress={handleTap}>
        <View style={styles.video}>
        

        {/* Fullscreen Video */}
        <Video
          key={userIndex}
          ref={videoRef}
          source={{ uri: users[userIndex].stories[storyIndex].story_url? users[userIndex].stories[storyIndex].story_url : "" }}
          style={styles.video}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
        </View>
        </TouchableWithoutFeedback>
      </View>

      {/* Close Button */}
      
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
