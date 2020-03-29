import React, { Component } from 'react';
export default {
    formatCurrency: function(num){
        return '$' + Number(num).toLocaleString() + ' ';
        // return '$' + Number(num,toFixed(4)).toLocaleString() + ' '; issue of fixing the price
    }
}