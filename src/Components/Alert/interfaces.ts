export interface AlertInterface {
    type: 'confirm';
    title: string;
    withBtnAction: boolean;
    content: string;
    open: boolean;
    isOk: boolean;
    isError: boolean;
    setOpen?: (open: boolean) => void;
}