import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import bille from "../../assets/bille.png";
import Spotify from "../../assets/Spotify.svg";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <View></View>
      <Text>Testando</Text>
      <Image style={styles.imagem} source={bille} />
      <Spotify style={styles.logo} width={196} height={59} />

      <View style={{ top: 350, alignItems: "center", paddingHorizontal: 53 }}>
        <Text
          style={
            {
              color: "#DADADA",
              fontSize: 25,
              lineHeight: 33,
              fontWeight: 700,
            } as any
          }
        >
          Enjoy listening to music
        </Text>
        <Text
          style={{
            color: "#DADADA",
            fontSize: 17,
            lineHeight: 22,
            fontWeight: "400",
            textAlign: "center",
            marginTop: 21,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          rhoncus feugiat turpis, vitae eleifend odio sollicitudin at.
          Vestibulum consectetur sapien a ex dictum, sed cursus augue viverra.
        </Text>

        <TouchableOpacity
          style={{
            width: 329,
            height: 92,
            backgroundColor: "#42C83C",
            borderRadius: 30,
            marginTop: 37,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
                color: "#F6F6F6",
                fontSize: 22,
                lineHeight: 29,
                fontWeight: "700",
                textAlign: "center",
                textTransform: "capitalize"
              }}
          >Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0C0C",
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    position: "absolute",
  },
  logo: { marginTop: 37 },
});
