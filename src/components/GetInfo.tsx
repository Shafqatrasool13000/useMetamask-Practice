import { useEffect, useState } from 'react'
import { useMetamask } from 'use-metamask';

const GetInfo = () => {
    const { getAccounts, getChain, metaState } = useMetamask();
    const [chainName, setChainName] = useState<string>();
    const [chainId, setChainId] = useState<number>();
    const [account, setAccount] = useState<string>();

    // Check if Metamask is Connected
    useEffect(() => {
        if (metaState.isAvailable) {
            (async () => {
                try {
                    let account = await getAccounts();
                    setAccount(account[0])

                    let chain = await getChain();
                    setChainName(chain.name);
                    setChainId(chain.id)

                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [metaState.chain.id, metaState.account[0]]);

    return (
        <div className='get-details'>
            <h1>By UseMetamask</h1>
            <h2 > Đapp connected to the <span className='detail'>{chainName} - (chain id: {chainId})</span> </h2>
            <h3 className='mt-4'>With account <span className='detail'>{account} </span></h3>
        </div>
    )
}

export default GetInfo