import React from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native"
import GridItem from "./GridItem"
import characters from "./wordlist"

export default class App extends React.Component {
  state = {
    dataSource: {},
  }

  componentDidMount() {
    this.setState({
      dataSource: characters,
    })
  }

  itemPressed = item => {
    this.setState(state => {
      const dataSource = [...this.state.dataSource]
      dataSource[item.index].active = !dataSource[item.index].active
      return { dataSource }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.grid}
          data={this.state.dataSource}
          extraData={this.state}
          renderItem={({ item }) => (
            <GridItem
              onPress={this.itemPressed.bind(this, item)}
              highlighted={!!this.state.dataSource[item.index].active}
              word={item.word}
            />
          )}
          numColumns={8}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  grid: {},
})
