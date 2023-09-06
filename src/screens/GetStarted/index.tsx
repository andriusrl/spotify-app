import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

import bille from "../../assets/bille.png";
import Spotify from "../../assets/Spotify.svg";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <View></View>
      <Text>Testando</Text>
      <Image style={styles.imagem} source={bille} />
      <Spotify style={styles.logo} width={196} height={59} />

      <View>
        <Text>Enjoy listening to music</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#0D0C0C",
    alignItems: "center"
  },
  imagem: {
    width: "100%",
    position: "absolute",
  },
  logo: { marginTop: 37 },
});
