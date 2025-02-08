import { Suspense, lazy } from "react"
const Comp_A = lazy(() => import('./Comp_A'));
const Comp_B = lazy(() => import('./Comp_B'));
// import Comp_A from "./Comp_A"
// import Comp_B from "./Comp_B"


function LazyLoading() {
    return (
        <div><h1>LazyLoading</h1>
        
        <Comp_A/>
        <Suspense fallback={<div>Loading......</div>} > 
            <Comp_B/>
        </Suspense>
        </div>
    )
}

export default LazyLoading