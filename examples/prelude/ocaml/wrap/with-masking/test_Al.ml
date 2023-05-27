let _: unit = Al.print_hello () (* calls B.print_hello () *)
let _: unit = Al.B.print_hello () (* calls C.print_hello () *)
(* let _: unit = Al.C.print_hello ()*) (* Error: Unbound module Al.C *)
