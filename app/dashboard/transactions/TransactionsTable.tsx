"use client"

import { useState } from "react"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { TransactionRow } from "@/app/components/TransactionRow"
import { useUserStore } from "@/app/providers/userStoreProvider"
import { useFiltersStore } from "@/app/providers/filterStoreProvider"

const ITEMS_PER_PAGE = 10

export const TransactionsTable = () => {
  const transactions = useUserStore((state) => state.user?.transactions) || []
  const searchQuery = useFiltersStore((state) => state.searchQuery)
  const transactionType = useFiltersStore((state) => state.transactionType)
 
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      !searchQuery || transaction.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      transactionType === "all" || transaction.type === transactionType;
    return matchesSearch && matchesType;
  });
  
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#333] hover:bg-[#222]">
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Description</TableHead>
            <TableHead className="text-gray-400">Account</TableHead>
            <TableHead className="text-gray-400">Amount</TableHead>
            <TableHead className="text-gray-400 text-right">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentTransactions.map((transaction) => ( <TransactionRow key={transaction.id} transaction={transaction} /> ))}
        </TableBody>
      </Table>

      <div className="py-4 flex items-center justify-between px-2">
        <div className="text-sm text-gray-400">
          Mostrando {startIndex + 1}-{Math.min(endIndex, filteredTransactions.length)} de {filteredTransactions.length} transacciones
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="text-white hover:bg-[#333] cursor-pointer"
                onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1
              if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      className={`text-white hover:bg-[#333] ${currentPage === page ? "bg-[#333]" : ""}`}
                      onClick={() => goToPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              }

              if ((page === currentPage - 2 && page > 2) || (page === currentPage + 2 && page < totalPages - 1)) {
                return (
                  <PaginationItem key={page}>
                    <PaginationEllipsis className="text-gray-400" />
                  </PaginationItem>
                )
              }
              return null
            })}

            <PaginationItem>
              <PaginationNext
                className="text-white hover:bg-[#333] cursor-pointer"
                onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
