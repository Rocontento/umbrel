import {ReactNode} from 'react'
import {Link, To} from 'react-router-dom'

import {buttonClass} from '@/layouts/bare/shared'
import {cn} from '@/shadcn-lib/utils'

import {bareContainerClass, BareSpacer, bareTextClass, bareTitleClass} from './shared'

export default function FailedLayout({
	title,
	description,
	buttonText,
	to,
}: {
	title: string
	description: ReactNode
	buttonText: string
	to: To
}) {
	return (
		<div className={cn(bareContainerClass, 'animate-in slide-in-from-bottom-2')}>
			<h1 className={bareTitleClass}>{title}</h1>
			<div className='pt-1' />
			<p className={bareTextClass}>{description}</p>
			<BareSpacer />
			<Link to={to} className={buttonClass}>
				{buttonText}
			</Link>
		</div>
	)
}
