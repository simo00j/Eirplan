import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import { View } from 'react-native';
import { SearchBar, ListItem, Text } from 'react-native-elements';


const kw = [{name:"info"}, {name: "informatique"}, {name: "mathématiques"}, {name: "matmeca"}]

class Searchbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      keywords: []
    }
  }

  searchMatch(keyword) {
    var searchKw = this.state.search.toLowerCase()
    var len = searchKw.length;
    var compt = 0;
    var fautes = 0;
    var no_match = false;
    var len2 = keyword.name.length
    if (len2 < len || len==0) {
      return false
    }
    while (len2 >= len && compt < len && no_match == false) {
      if (keyword.name[compt] != searchKw[compt]) {
        if (fautes > 1 || len < 3) {
          no_match = true
        }
        else {
          fautes++
        }
      }
      compt++
      if (no_match == true) {
        return false;
      }
    }
    return true;
  };

  searchKeyword() {
    var final_list = kw.filter(item => this.searchMatch(item))
    this.setState(() => ({ keywords: final_list}));
  };

  OnPressKeyWordHandler(k) {
    alert(k.name)
}
  displayList(){
    if(this.state.keywords.length>0){
      return <View >
        {this.state.keywords.map((l, i) => (
              <ListItem key={i} containerStyle={Styles.listView} bottomDivider onPress={() => {this.OnPressKeyWordHandler(l);}}>
                  <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                  </ListItem.Content>
              </ListItem>
          ))
      }
      </View>
    }
  }

  updateSearch = (search) => {
    this.setState(() => ({search}), () => {this.searchKeyword()})
  };

  showSearchbar(){
    const { search } = this.state;
    return (
    <SearchBar
    placeholder="Search..."
    onChangeText={this.updateSearch}
    value={search}
    platform="android"
    placeholderTextColor={"black"}
    containerStyle={Styles.searchView}
  />)
  }
  render() {
    return (
      <View>
        <Text>{this.showSearchbar()}</Text>
        <Text>{this.displayList()}</Text>
      </View>
    )
  }
}

export default Searchbar;