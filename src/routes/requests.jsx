import React,{useState} from "react";
import {Card,Button,Alert,Label,SearchBar} from "../components/components";
import "../styles/routes.css"
import "../styles/fonts.css"
import { sendFile } from "../ipfs/ipfs";


const submitButtonStyle={
    border:" none",
    borderRadius:"1.2em",
    backgroundColor:"#008CBA",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
    fontStyle: 'normal',
    padding:"1em"
};

const cardStyle={
    width:"auto",
    justifyContent:"center",
    alignItems:"center",  
};

const alignmentStyle={
    justifyContent:"center",
    alignItems:"center",
    gap:"1em",
    padding:"2em",
    flexWrap:"wrap"
}

const fileUpload={
    // width:"auto",
    // padding:"0em" ,
    // margin:"0em" ,
    // height:"1.5em" 
};

//update the below value
const numberOfContentsInEachPage = 2;


export const Requests=({children})=>{
    const tempIds=[
        {token:"1",arr:[]},
        {token:"12",arr:[]},
        {token:"3",arr:[]},
        {token:"4",arr:[]},
        {token:"5",arr:[]},
        {token:"15",arr:[]},
        {token:"16",arr:[]},
        {token:"17",arr:[]},
        {token:"26",arr:[]}
    ]

    const [files,setFiles]=useState();
    const [initial,setInitial]=useState(0);
    const [final,setFinal] = useState(numberOfContentsInEachPage);
    const [searchResults, setSearchResults] = useState([]);

    //submits the data to ipfs and gets a hash with sweet alert
    function onSubmit(e,index,array1){
        Alert({
            props:{
                text:"Do you want to upload file to IPFS",
                success:"Successfully uploaded to IPFS",
                denied:"Upload was denied"
            },
            type:"confirm"
        }).then(async (event)=>{
            const hash= await sendFile(files[index]);
            if(hash!=undefined){
                console.log("sending files",files[index],files,index,hash);
                array1.push(hash);
            }
            
            
        })
    }

    //functionality of next button
    function clickNext(e){
        setInitial(initial + numberOfContentsInEachPage);
        setFinal(final + numberOfContentsInEachPage);
    }

    //functionality of previous button
    function clickPrev(e){
        setInitial(initial - numberOfContentsInEachPage);
        setFinal(final - numberOfContentsInEachPage);
    }

    //selects the image from the users directory
    function selectFile(e,index){
        const _files=files;
        _files[index]=e.target.files[0];
        console.log(e.target.files[0],index,_files);
        setFiles(_files);
    }

    //for handling search functionality
    const handleSearch = (term) => {
        console.log("Searching for:", term);
        var x= tempIds.filter(item=> item.token.includes(term));
        console.log("x length is : ",x.length);
        setSearchResults([...searchResults, x]);
    };

    return (
        <div className="row-center" style={alignmentStyle}>
        <div style={{width:"100%",display: "flex", justifyContent: "space-around"}}>
        <SearchBar onSearch={handleSearch} />
        </div>
        {/* to display the  initial contents (contents before searching) */}
        {searchResults.length==0 && tempIds.map((tempId,key)=>{
                    return <Card className="column-center" key={key} style={cardStyle}> 
                        <h5>Token id: {tempId.token} </h5>   
                        <div className="row-center" style={{gap:"1em",alignItems:"center"}}>
                            <Label type="file" style={fileUpload} onChange={(e)=>{selectFile(e,key,tempId.arr)}}>Select File</Label>
                            <Button  style={submitButtonStyle} onClick={(e)=>onSubmit(e,key)}>Submit</Button>
                        </div>
                    </Card>
                })}
            {/* to display the searched contents */}
            {searchResults[searchResults.length-1]?.map((tempId,key)=>{
                if(key>=initial && key<final) 
                    return (<Card className="column-center" key={key} style={cardStyle}> 
                        <h5>Token id: {tempId.token} </h5> 
                        {/* {tempId.arr.map((ele,key)=>{
                            return (
                                <h5>{ele}</h5>
                            )
                        })}   */}
                        <div className="row-center" style={{gap:"1em",alignItems:"center"}}>
                            <Label type="file" style={fileUpload} onChange={(e)=>{selectFile(e,key,tempId.arr)}}>Select File</Label>
                            <Button  style={submitButtonStyle} onClick={(e)=>onSubmit(e,key)}>Submit</Button>
                        </div>
                    </Card>) 
                })
            }
            <div style={{width:"100%",display: "flex", justifyContent: "space-around"}}>
                {initial!=0 && <Button  onClick={(e)=>{clickPrev(e)}}>Previous</Button>}
                {searchResults.length!=0 && <Button onClick={(e)=>clickNext(e)}>Next</Button>}
            </div>
        </div>
    );
}