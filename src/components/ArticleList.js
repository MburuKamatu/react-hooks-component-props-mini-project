
function ArticleList(prop){
  const colorElements = colors.map((color) => {   
    return (
      <main>
         <li key={article} style={{ color: color }}>
          {color}
        </li>
      </main>
    );
  });
}