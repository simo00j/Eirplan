import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

let kw = ["info", "informatique", "mathématiques", "matmeca"]

class Searchbar extends Component {
  state = {
    search: '',
    keywords: [],
  };


  constructor(props) {
    super(props)
  }

  searchMatch(keyword) {
    var searchKw = this.state.search.toLowerCase()
    var len = searchKw.length;
    var compt = 0;
    var fautes = 0;
    var no_match = false;
    var len2 = keyword.length
    console.log(searchKw)
    if (len2 <= len) {
      return false
    }
    while (len2 >= len && compt < len && no_match == false) {
      if (keyword[compt] != searchKw[compt]) {
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
    this.setState(() => ({ keywords: final_list }), () => { console.log(this.state.keywords) });
  };

  updateSearch = (search) => {
    this.setState(() => ({search}), () => {this.searchKeyword()})
  };


  render() {
    const { search } = this.state;
    return (
      <View style={Styles.container}>
        <SearchBar style={Styles.searchbar}
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={search}
          placeholderTextColor={"black"}
          platform="android"
        />
      </View>
    )
  }
}

export default Searchbar;