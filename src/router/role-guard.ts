/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  console.log(to, from, next);

  const userRole = localStorage.getItem("userRole");

  if (userRole === "Admin") {
    // queremos navegar!
    next();
  } else {
    alert("No eres admin! No puedes pasar!");
    next({ name: "home" });
  }
};

export default haveRoleGuard;
