import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import * as Font from "expo-font"

export default class GridItem extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      KaiTi: require("./assets/fonts/KaiTi.ttf"),
    })
    this.setState({
      fontLoaded: true,
    })
  }

  render() {
    const style = this.props.highlighted
      ? [styles.gridItem, styles.gridItemActive]
      : styles.gridItem
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={style}>
          {this.state.fontLoaded ? (
            <Text style={styles.word}>{this.props.word}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 18,
  },
  gridItemActive: {
    backgroundColor: "lightblue",
  },
  word: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "KaiTi",
  },
})
