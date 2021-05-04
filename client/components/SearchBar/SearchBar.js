import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import {Dimensions, View } from 'react-native';
import { SearchBar, ListItem, Text } from 'react-native-elements';


const width1 = Dimensions.get("window").width;
const width = width1/2
class Searchbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      keywords: [],
      allKeywords: props.allKeywords,
      OnPressKeyWordHandler: props.OnPressKeyWordHandler
    }
  }

  searchMatch(keyw) {
    var searchKw = this.state.search.toLowerCase()
    var keyword = keyw.keyword.toLowerCase()
    var len = searchKw.length;
    var compt = 0;
    var fautes = 0;
    var no_match = false;
    var len2 = keyword.length
    if (len2 < len || len==0) {
      return false
    }
    while (len2 >= len && compt < len && no_match == false) {
      if (keyword[compt] != searchKw[compt]) {
        if (fautes > 0  || len < 3) {
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
    var final_list = this.props.allKeywords.filter(item => this.searchMatch(item))
    this.setState(() => ({ keywords: final_list}));
  };

  
  displayList(){
    if(this.state.keywords.length>0){
      return <View style={Styles.boxList}>
        {this.state.keywords.map((l, i) => (
              <ListItem key={i} containerStyle={Styles.listView} bottomDivider onPress={() => {this.props.OnPressKeyWordHandler(l);}}>
                  <ListItem.Content>
                      <ListItem.Title style={Styles.inputSearch}>{l.keyword}</ListItem.Title>
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
    console.log("ea", search)
    return (
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        platform="android"
        containerStyle={Styles.searchView}
        inputStyle={Styles.inputSearch}
        searchIcon={{size:width1/30}}
        clearIcon={{size:width1/30}}
        cancelIcon={{size:width1/30}}
      />)
  }
  render() {
    return (
      <View >
        <Text>{this.showSearchbar()}</Text>
        <Text style={{alignSelf:'center'}}>{this.displayList()}</Text>
      </View>
    )
  }
}

export default Searchbar;