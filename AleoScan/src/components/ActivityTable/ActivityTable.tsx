import Cart from "@icon/detail/shopping-cart.svg"
import Clipboard from "@icon/detail/clipboard.svg"
import Cancel from "@icon/detail/cancel.svg"
import Expired from "@icon/detail/expired.svg"
import Transfer from "@icon/detail/transfer.svg"
import Mint from "@icon/detail/mint.svg"
import Stone from "@icon/detail/stone.png"
import ETH from "@icon/detail/eth-logo.png"
import RefreshIcon from "@icon/detail/refresh.svg"
import CloseIcon from "@icon/detail/close.svg"

enum EventType {
    SALE,
    LIST_FOR_SALE,
    CANCELED,
    EXPIRED,
    TRANSFER,
    MINT

}

const fakeData = [
    {
        eventType : EventType.SALE,
        price: 0,
    },
    {
        eventType : EventType.LIST_FOR_SALE,
        price: 0.000142,
    },
    {
        eventType : EventType.CANCELED,
        price: 0,
    },
    {
        eventType : EventType.EXPIRED,
        price: 0.000142,
    },
    {
        eventType : EventType.TRANSFER,
        price: 0,
    },
    {
        eventType : EventType.MINT,
        price: 0.000142,
    },
    {
        eventType : EventType.SALE,
        price: 0,
    },
    {
        eventType : EventType.LIST_FOR_SALE,
        price: 0.000142,
    },
    {
        eventType : EventType.CANCELED,
        price: 0,
    },
    {
        eventType : EventType.EXPIRED,
        price: 0.000142,
    },
    {
        eventType : EventType.TRANSFER,
        price: 0,
    },
    {
        eventType : EventType.MINT,
        price: 0.000142,
    }
]


export default function ActivityTable () {
    const getEventTypeContent = (eventType : EventType) => {
        switch(eventType) {
            case EventType.SALE: {
                return (
                    <div className="flex items-center gap-3"> 
                        <img src={Cart} alt="" className="w-4 h-4"/>
                        <span className="text-[#68E853] text-sm">Sale</span>
                    </div>
                )
            }
            case EventType.LIST_FOR_SALE: {
                return (
                    <div className="flex items-center gap-3"> 
                        <img src={Clipboard} alt="" className="w-4 h-4"/>
                        <span className="text-[#5584FC] text-sm">List for sale</span>
                    </div>
                )
            }
            case EventType.CANCELED: {
                return (
                    <div className="flex items-center gap-3"> 
                        <img src={Cancel} alt="" className="w-4 h-4"/>
                        <span className="text-[#F42B67] text-sm">Canceled</span>
                    </div>
                )
            }
            case EventType.EXPIRED: {
                return (
                    <div className="flex items-center gap-3"> 
                        <img src={Expired} alt="" className="w-4 h-4"/>
                        <span className="text-[#FFDF6E] text-sm">Expired</span>
                    </div>
                )
            }
            case EventType.TRANSFER: {
                return (
                    <div className="flex items-center gap-3"> 
                        <img src={Transfer} alt="" className="w-4 h-4"/>
                        <span className="text-[#C84CFF] text-sm">Transfer</span>
                    </div>
                )
            }
            case EventType.MINT: {
                return (
                    <div className="flex items-center gap-3"> 
                        <img src={Mint} alt="" className="w-4 h-4"/>
                        <span className="text-[#0DC9A7] text-sm">Mint</span>
                    </div>
                )
            }
            default : 
                return
        }
    }

    const getPriceContent = (price? : number) => {
        if(!price) return "--"
        return (
            <div className="flex flex-col items-end"> 
                <div className="flex items-center gap-2 w-fit"> 
                    <img src={ETH} alt="eth logo"/>
                    <span className="text-sm text-white font-semibold">{price}</span>
                </div>
                <span className="text-gray">{`($0.26)`}</span>
            </div>
        )
    }

    return (
        <section className="flex flex-col w-full py-4 gap-4">
            <div className="flex flex-col gap-4 px-4">
                <div className="flex gap-2 items-center">
                    <div className="flex h-fit">
                        <img src={RefreshIcon} alt="refresh"/>
                    </div>
                    <h5 className="text-gray text-sm font-medium">Last update: 7 minutes ago</h5>
                </div>
                <div className="flex gap-4">
                    <button className="flex justify-center items-center py-2 pr-3 pl-5 border border-primary rounded-lg gap-[10px] text-white text-sm font-medium">
                        Canceled
                        <img src={CloseIcon} alt="close"/>
                    </button>
                    <button className="flex justify-center items-center py-2 pr-3 pl-5 border border-primary rounded-lg gap-[10px] text-white text-sm font-medium">
                        Transfer
                        <img src={CloseIcon} alt="close"/>
                    </button>

                    <button className="flex justify-center items-center py-2 px-5 text-primary text-sm font-semibold">
                        Clear All
                    </button>
                </div>
            </div>

            <table className="table-fixed text-white text-left" id="DetailTable">
                <thead>
                    <tr className="">
                        <th>Event</th>
                        <th>Item</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">From</th>
                        <th className="text-right">To</th>
                        <th className="text-right">Date</th>
                        <th className="w-[72px]"></th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {fakeData.map((data : any, index : number) => (
                        <tr key={index}>
                            <td className="text-left ">
                                <div className="flex items-center gap-3"> 
                                    {getEventTypeContent(data.eventType)}
                                </div>
                            </td>
                            <td className="text-left ">
                                <div className="flex gap-[10px] items-center">
                                    <img src={Stone} alt="NFT logo" className="w-12 aspect-square rounded-lg"/>
                                    <span className="text-secondary font-semibold">the Ugly Dragon Egg #777</span>
                                </div>
                            </td>
                            <td className="text-right">{getPriceContent(data.price)}</td>
                            <td className="text-secondary font-medium text-right">0x33Da</td>
                            <td className="text-secondary font-medium text-right">0xa815</td>
                            <td className="text-white text-right">47 minutes ago</td>
                        </tr>
                    ))}
                    
                    
                </tbody>
            </table>
          </section>
    )
}
