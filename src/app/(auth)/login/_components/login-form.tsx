'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { loginSchema } from "@/lib/schemes/auth.schema";
import { LoginFields } from "@/lib/types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import Link from "next/link";
import { useLogin } from "./_hooks/use-login";
import SubmissionFeedback from "./shared/submission-feedback";


export default function LoginForm() {

   
    const form = useForm<LoginFields>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const {login,isPending,error}=useLogin();

    const onSubmit: SubmitHandler<LoginFields> = (values) => {
        login(values);  

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-112 w-full my-9">
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="user@example.com"  {...field} />

                        </FormControl>
                    </FormItem>}
                />

                   <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="***********"  {...field} type="password" />

                        </FormControl>
                    </FormItem>}
                />
                <Link href='/forget-password' className="text-sm font-medium block -mt-1.5 self-end">Forget your password?</Link>
                <SubmissionFeedback>{error?.message}</SubmissionFeedback>

                <Button disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}  type="submit" className="w-full mt-6">Login</Button>
            </form>

        </Form>
    );


}