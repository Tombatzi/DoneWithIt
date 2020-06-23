import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  appButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;
