import { action, computed, observable } from "mobx"
class UserStore {
    @observable info = {name:'mobx'};

    @action
    setInfo = data => {
        console.log(data)
        this.info = {
            ...this.info,
            name:data
        };
    };
}
const userStore = new UserStore();
export default userStore;