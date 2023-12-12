const LoadMore = ({onClick}) => (
   <button 
   style={{ 
      display: 'block',
      borderRadius: '30px',
    border:'1px solid black',
   color:'black',
   minWidth: '169px',
   height: '30px',
   marginRight: 'auto',
   marginLeft: 'auto',

}}
   
   type="button" onClick={onClick}>Load more</button>);


export default LoadMore;
