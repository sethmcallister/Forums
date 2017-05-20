import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'
import { siteTitle } from '../../site.config'

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>
          {siteTitle}
        </h1>
        <nav>
          <Link activeClassName="active" href="/">Home</Link>
          <Link activeClassName="active" href="/profile">Me</Link>
          <Link activeClassName="active" href="/profile/john">John</Link>
        </nav>
      </header>
    )
  }
}
