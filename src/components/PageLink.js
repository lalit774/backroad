export const PageLink = ({ itemClass, href, text }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}
