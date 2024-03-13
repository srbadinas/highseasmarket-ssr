'use client'

import { Container } from "@/components/container";
import { ApplicationLogo } from "@/components/application-logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, MouseEvent as ClickEvent, useEffect, useRef, useState, forwardRef } from "react";

export const Header = () => {
    const [expand, setExpand] = useState<boolean>(false)
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [expand])

    const handleOutsideClick = (event: MouseEvent) => {
        if (expand && buttonRef.current && !buttonRef.current.contains(event.target as Node) && menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setExpand(prev => !prev);
        }
    }

    const handleMenuClick = (event: ClickEvent) => {
        setExpand(prev => !prev);
    }

    return (
        <header>
            <div className="min-h-[90px] bg-gray-600 flex items-center">
                <Container className="grid grid-cols-2 items-center">
                    <ApplicationLogo />
                    <div className="place-self-end grid gap-1">
                        <Link href="/login">
                            <Button type="button" className="w-[150px] rounded-full">Login</Button>
                        </Link>
                        <p className="text-xs">Don't have an account? <Link href="/register" className="text-primary">Apply</Link></p>
                    </div>
                </Container>
            </div>
            <div className="w-full bg-gradient-to-b from-primary to-secondary flex flex-col justify-center">
                <Container className="h-[70px] relative flex items-center">
                    <div className="w-full flex gap-4">
                        <div>
                            <Button ref={buttonRef} type="button" className="size-[50px] text-xl" onClick={handleMenuClick}><MenuIcon /></Button>
                        </div>
                        <SearchInput />
                    </div>
                    {
                        expand ? <Menu ref={menuRef} /> : ''
                    }
                </Container>
            </div>
        </header>
    )
}

const Menu = forwardRef<HTMLDivElement>((props, ref) => {
    return <div ref={ref} className="absolute w-full h-[64px] left-0 top-[70px] bg-gradient-to-b from-secondary to-primary rounded-b flex items-center">
        <ul className="w-full">
            <MenuItem  href="/" label="Home"/>
            <MenuItem  href="/listings" label="Listings"/>
        </ul>
    </div>
})

interface MenuItemProps {
    href: string
    label: string
}

const MenuItem = ({ href, label }: MenuItemProps) => (<li className="px-2"><Link href={href} className="block text-white transition px-2 hover:bg-blue-600">{label}</Link></li>)

const SearchInput = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <div className="w-full bg-white flex items-center ps-1 pe-4">
            <form className="w-full flex items-center gap-2" onSubmit={handleSubmit}>
                <Input className="border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Search Product..." onChange={handleChange} />
                <SearchIcon />
            </form>
        </div>
    )
}