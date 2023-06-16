interface ModalBaseProps {
    open: boolean
    children: ReactNode
    close: () => void

    header?: string
    width?: string
    height?: string
    onBack?: () => void
    onClose?: () => void
    onClear?: () => void
    close_button?: boolean
    children_header?: ReactNode
}

export type { ModalBaseProps }
