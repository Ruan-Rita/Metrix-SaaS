import { LockClosedIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { ModalBaseProps } from './Typing';

export default function ModalBase({ width = '300', header, children, close, open, children_header = false, close_button = true }: ModalBaseProps) {
    return (
        <>
            {open ? (
                <>
                    <div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className={`border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[${width}px]`}>
                                {children_header ? children_header : (
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            {header}
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => close()}
                                        >
                                            <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                <XMarkIcon className="text-black" />
                                            </span>
                                        </button>
                                    </div>
                                )}
                                <div className="relative p-6 flex-auto">
                                    {children}
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    {close_button ?
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => close()}>Close</button>
                                        : null
                                    }
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => close()}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}