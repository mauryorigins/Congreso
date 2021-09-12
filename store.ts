import { createStore, applyMiddleware, compose, Store, AnyAction } from "redux"
import thunk from "redux-thunk"
import { createWrapper, MakeStore } from "next-redux-wrapper"
import rootReducer from '@Reducers/index'

const middleware = [thunk]

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore as unknown as  MakeStore<Store<any, AnyAction>> )
