import type { TDialogProps } from "@/type/baseType";
import { reactive } from "vue";

export default function dialog(
    title?: string, width?: number, height?: number
) {
    const dialogProps = reactive<TDialogProps>({
        title: title || '弹窗',
        visible: false,
        width: width || 640,
        height: height || 280,
    })

    const onShow = () => {
        dialogProps.visible = true;
    }

    const onClose = () => {
        dialogProps.visible = false;
    }

    const onConfirm = () => {
        dialogProps.visible = false;
    }

    return { dialogProps, onShow, onClose, onConfirm };
}