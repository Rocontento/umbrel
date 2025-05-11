import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import {Check, ChevronRight, Circle} from 'lucide-react'
import * as React from 'react'

import {cn} from '@/shadcn-lib/utils'

import {contextMenuClasses} from './shared/menu'

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
		inset?: boolean
	}
>(({className, inset, children, ...props}, ref) => (
	<ContextMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(contextMenuClasses.item.root, inset && 'pl-8', className)}
		{...props}
	>
		{children}
		<ChevronRight className='ml-auto h-4 w-4' />
	</ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({className, ...props}, ref) => (
	<ContextMenuPrimitive.SubContent
		ref={ref}
		className={cn(contextMenuClasses.content, className)}
		{...props}
		// Prevent right-clicks within subcontent from triggering parent context menus
		onContextMenu={(e) => {
			e.preventDefault() // Prevent default browser context menu
			e.stopPropagation()
		}}
	/>
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({className, ...props}, ref) => (
	<ContextMenuPrimitive.Portal>
		<ContextMenuPrimitive.Content
			ref={ref}
			className={cn(contextMenuClasses.content, className)}
			{...props}
			// Prevent right-clicks within content from triggering parent context menus
			onContextMenu={(e) => {
				e.preventDefault() // Prevent default browser context menu
				e.stopPropagation()
			}}
		/>
	</ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
		inset?: boolean
	}
>(({className, inset, ...props}, ref) => (
	<ContextMenuPrimitive.Item
		ref={ref}
		className={cn(contextMenuClasses.item.root, inset && 'pl-8', className)}
		{...props}
	/>
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({className, children, checked, ...props}, ref) => (
	<ContextMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(contextMenuClasses.checkboxItem.root, className)}
		checked={checked}
		{...props}
	>
		<span className={contextMenuClasses.checkboxItem.indicatorWrapper}>
			<ContextMenuPrimitive.ItemIndicator>
				<Check className='h-4 w-4' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({className, children, ...props}, ref) => (
	<ContextMenuPrimitive.RadioItem ref={ref} className={cn(contextMenuClasses.radioItem.root, className)} {...props}>
		<span className={contextMenuClasses.radioItem.indicatorWrapper}>
			<ContextMenuPrimitive.ItemIndicator>
				<Circle className='h-4 w-4 fill-current' />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
		inset?: boolean
	}
>(({className, inset, ...props}, ref) => (
	<ContextMenuPrimitive.Label
		ref={ref}
		className={cn(
			'px-2 py-1.5 text-sm font-semibold text-neutral-950 dark:text-neutral-50',
			inset && 'pl-8',
			className,
		)}
		{...props}
	/>
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({className, ...props}, ref) => (
	<ContextMenuPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-white/5', className)} {...props} />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({className, ...props}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn('ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400', className)}
			{...props}
		/>
	)
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuCheckboxItem,
	ContextMenuRadioItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuGroup,
	ContextMenuPortal,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuRadioGroup,
}
