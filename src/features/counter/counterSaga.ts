import {call, put, takeLatest} from "redux-saga/effects";
import {counterSlice} from "./counterSlice";

const fakeApi = (max: number): Promise<number> => new Promise((resolve) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * max))
    }, 2000)
})

function* getRandomCounter(e: any) {
    // @ts-ignore
    const res = yield call(fakeApi, e.payload);
    yield put(counterSlice.actions.incrementByAmount(res));
}

export default function* counterSaga() {
    yield takeLatest(counterSlice.actions.increment.type, getRandomCounter)
}