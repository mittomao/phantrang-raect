import React, { Component } from 'react';
import Table_Item from './Table_Item';

var newsList = [
    {
      "id": "abc01",
      "title": "The Highs and Lows of Life as a Black Editor in Chief",
      "content": "ct1"
    },
    {
      "id": "abc02",
      "title": "The Real Reason Apple Wants You to Use Its Sign-in Service",
      "content": "ct2"
    },
    {
      "id": "abc03",
      "title": "Men Need To Think More About Fertility",
      "content": "ct3"
    },
    {
      "id": "abc04",
      "title": "Reactive Streams and Kotlin Flows",
      "content": "ct4"
    },
    {
      "id": "abc05",
      "title": "The Incredible Creative Power of the Index Card",
      "content": "ct5"
    },
    {
      "id": "abc06",
      "title": "The Man Who Helped the Beatles Admit It’s Getting Better",
      "content": "ct6"
    },
    {
      "id": "abc07",
      "title": "Facebook Can Resolve Its Issues — How Will We Resolve Ours?",
      "content": "ct7"
    },
    {
      "id": "abc08",
      "title": "The Personal Newsletter Fad Needs to End",
      "content": "ct8"
    },
    {
      "id": "abc09",
      "title": "How Do You Know You Have a Good Idea?",
      "content": "ct9"
    },
    {
      "id": "abc10",
      "title": "Ronaldo & Messi",
      "content": "ct10"
    }
  ]
  
class Table_List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage :1 , 
            newsPerPage : 3
        };
    }
    chosePage = (event)=>{
        this.setState({
            currentPage : Number(event.target.id)
        });
    }
    render() {
        const tranght = this.state.currentPage;
        const sopt = this.state.newsPerPage;
        const ptcuoi = tranght*sopt; // Vi tri phan tu cuoi cung cua 1 trang
        const ptdau = ptcuoi - sopt;
        const trang = newsList.slice(ptdau,ptcuoi);
        // console.log(trang);
        // So Trang
        const soPani = [];
        const soTrang = Math.ceil(newsList.length/sopt);
        for(let i = 1 ; i <= soTrang ;i++){
            soPani.push(i);
        }
        const renderList = trang.map((value,index)=>{
            return (
                <Table_Item key = {index} stt = {index + 1 + (tranght - 1)*sopt} data = {value} />
            )
        })
        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                   {renderList}
                </tbody>
            </table>
            <ul className="list-pagination">
                {
                    soPani.map(num=>{
                        if(this.state.currentPage === num){
                            return (
                                <li key ={num} id={num} className="active">{num}</li>
                            )
                        }
                        else{
                            return (
                                <li key ={num} id={num} onClick={this.chosePage}>{num}</li>
                            )
                        }
                    })
               
                }
            </ul>
            </div>
        );
    }
}

export default Table_List;