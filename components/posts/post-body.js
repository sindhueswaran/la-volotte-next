export default function PostBody({ content }) {
  return (
    <div className="mx-auto py-5">
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  )
}
