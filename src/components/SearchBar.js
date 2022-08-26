
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'

class SearchBar extends React.Component {
	render() {
    return (
      <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="input-group">
                    {/* <label class="col-form-label" for="lang">Location</label> */}
                    <select class=" form-control" name="locations" >
                    <option value="Mexico">
                            Mexico
                    </option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    </select>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <label for="language"></label>
                    <input type="search" class="form-control" placeholder="Find what are you looking for"/>
                    <span class="input-group-btn">
                        <button class="btn btn-default">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="col-2">
                <div class="input-group">
                    {/* <label  class="col-form-label"  for="lang">Language</label> */}
                    <select class= "form-control"  data-live-search="true" data-iconBase="fa" data-tickIcon="fa-check">
                    <option data-icon="fa fa-phone" value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
  );
  }
}

export default SearchBar;
