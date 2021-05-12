import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import {Dimensions, View } from 'react-native';
import { SearchBar, ListItem, Text } from 'react-native-elements';


const width1 = Dimensions.get("window").width;


class Searchbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayWords: false, // 
      search: '', //input string of the searchbar
      keywords: [], //keywords matching the string search
      allKeywords: props.allKeywords, //props containing the entire list of the keywords of the database
      OnPressKeyWordHandler: props.OnPressKeyWordHandler //props containing the handler called when the action OnPress is made on a keyword 
    }
  }

  /*  return true if this.state.search is at the beginning of the string keyw
  *   and allows a difference of one letter if length of this.state.search is > 3
  *   return false otherwise
  */
  searchMatch(keyw) {
    var searchKw = this.state.search.toLowerCase()
    var keyword = keyw.name.toLowerCase()
    var len = searchKw.length;
    var compt = 0;
    var fautes = 0;
    var no_match = false;
    var len2 = keyword.length
    if(keyword[0]==' '){
      keyword = keyword.substring(1, len2)
    }
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

  /*  fill the state keywords with all the keywords from the props.allkeyword
  *   on which the function searchMatch has returned true 
  */
  searchKeyword() {
    var final_list = this.props.allKeywords.filter(item => this.searchMatch(item))
    this.setState(() => ({ keywords: final_list}));
  };

  /*  return a view containing a list of the state keywords
  */
  displayList(){
    if(this.state.keywords.length>0){
      if (this.state.displayWords) 
        return <View style={Styles.boxList}>
          {this.state.keywords.map((l, i) => (
                <ListItem key={i} containerStyle={Styles.listView} bottomDivider onPress={() => {this.props.OnPressKeyWordHandler(l); this.setState({displayWords: false});}}>
                    <ListItem.Content>
                        <ListItem.Title style={Styles.inputSearch}>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))
        }
        </View>
      return 
    }
  }

  /*handler called when the input of the SearchBar is modified
  */
  updateSearch = (search) => {
    this.setState(() => ({search}), () => {this.searchKeyword()})
    this.setState({displayWords : true});
  };

  /* return the component SearchBar */
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