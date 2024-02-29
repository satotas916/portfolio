export default function ArticleContents(props: { contents: string }) {
  const ContentsTag = props.contents ?
    <><div className='p-article' dangerouslySetInnerHTML={{ __html: `${props.contents}` }} /></> :
    <></>

  return (<>{ContentsTag}</>);
}
