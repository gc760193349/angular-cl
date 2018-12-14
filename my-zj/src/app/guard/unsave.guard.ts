import { CanDeactivate } from "@angular/router";
import { PersonalInfoAlterComponent } from "../personal-info-alter/personal-info-alter.component";

export class UnsaveGuard implements CanDeactivate<PersonalInfoAlterComponent> {
  //第一个参数 范型类型的组件
  //根据当前要保护组件 的状态 判断当前用户是否能够离开
  canDeactivate(component: PersonalInfoAlterComponent) {
    return window.confirm('您确定吗？');
  }
}
