import React from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native"
import GridItem from "./GridItem.js"

var chars = [
  "人",
  "口",
  "大",
  "中",
  "小",
  "哭",
  "笑",
  "一",
  "上",
  "下",
  "爸",
  "妈",
  "天",
  "太",
  "月",
  "二",
  "地",
  "阳",
  "亮",
  "星",
  "云",
  "火",
  "水",
  "三",
  "土",
  "山",
  "石",
  "木",
  "我",
  "好",
  "有",
  "田",
  "牛",
  "羊",
  "聪",
  "耳",
  "目",
  "心",
  "和",
  "四",
  "明",
  "头",
  "眉",
  "鼻",
  "手",
  "花",
  "树",
  "五",
  "草",
  "叶",
  "日",
  "风",
  "雨",
  "的",
  "孩",
  "六",
  "白",
  "红",
  "是",
  "家",
  "多",
  "唱",
  "子",
  "七",
  "爱",
  "爷",
  "奶",
  "少",
  "歌",
  "不",
  "朋",
  "八",
  "宝",
  "在",
  "学",
  "书",
  "游",
  "友",
  "儿",
  "九",
  "贝",
  "生",
  "习",
  "看",
  "戏",
  "字",
  "气",
  "十",
]

export default class App extends React.Component {
  state = {
    dataSource: {},
  }

  componentDidMount() {
    // shuffle
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[chars[i], chars[j]] = [chars[j], chars[i]]
    }

    let items = Array.apply(null, Array(chars.length)).map((v, i) => {
      return {
        index: i,
        word: chars[i],
        active: false,
      }
    })
    this.setState({
      dataSource: items,
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
