import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styles from './nav.module.scss'

class Nav extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			currentActive: '/'
		}
	}
	render() {
		const { currentActive } = this.state
		return (
			<nav className={styles.nav}>
				<Link to='/' className={currentActive === '/' ? styles.active : ''} onClick={this.handleNavClick.bind(this, '/')}>
					首页
				</Link>
				<Link
					to='/category/all'
					className={currentActive === 'category' ? styles.active : ''} onClick={this.handleNavClick.bind(this, 'category')}>
					分类
				</Link>
				<Link
					to='/rank'
					className={currentActive === 'rank' ? styles.active : ''} onClick={this.handleNavClick.bind(this, 'rank')}>
					排行
				</Link>
				<Link
					to='/bookcase'
					className={currentActive === 'bookcase' ? styles.active : ''} onClick={this.handleNavClick.bind(this, 'bookcase')}>
					书架
				</Link>
			</nav>
		)
	}
	handleNavClick(route) {
		this.setState({currentActive: route})
	}
}

export default withRouter(Nav)