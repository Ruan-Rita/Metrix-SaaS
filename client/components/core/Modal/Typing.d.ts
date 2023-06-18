import { type } from "os"

interface ModalProps {
    open: boolean
    close: () => void
    hasFooter?: boolean
    header?: string
    width?: string
    height?: strinf
    onBack?: () => void
    onClose?: () => void
    onClear?: () => void
    close_button?: boolean
    children_header?: ReactNode
}

interface ModalBaseProps extends ModalProps {
    children: ReactNode
}

export type { ModalBaseProps, ModalProps }
