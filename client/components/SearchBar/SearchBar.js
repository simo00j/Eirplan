import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import {Dimensions, View } from 'react-native';
import { SearchBar, ListItem, Text } from 'react-native-elements';


const kw = [{name:"ingénierie"}, {name: "informatique"}, {name: "mathématiques"}, {name: "matmeca"}, {name: "innovation"}, {name: "iOs"}, {name: "inria"}]

const width1 = Dimensions.get("window").width;
const width = width1/25
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
      return <View style={{zIndex : 10}}>
        {this.state.keywords.map((l, i) => (
              <ListItem key={i} containerStyle={Styles.listView} bottomDivider onPress={() => {this.OnPressKeyWordHandler(l);}}>
                  <ListItem.Content>
                      <ListItem.Title style={Styles.inputSearch}>{l.name}</ListItem.Title>
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
    containerStyle={Styles.searchView}
    inputStyle={Styles.inputSearch}
    searchIcon={{size:width}}
    clearIcon={{size:width}}
    cancelIcon={{size:width}}
  />)
  }
  render() {
    return (
      <View >
        <Text>{this.showSearchbar()}</Text>
        <Text>{this.displayList()}</Text>
      </View>
    )
  }
}

export default Searchbar;