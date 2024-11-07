"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { toast } from "sonner";

export type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const DeleteDialog = ({ onConfirm }: { onConfirm: () => Promise<void> }) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {
    await onConfirm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          Supprimer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmer la suppression</DialogTitle>
          <DialogDescription>
            Êtes-vous sûr de vouloir supprimer ce message ? Cette action est
            irréversible.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate" title={row.original.message}>
        {row.original.message}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      return format(new Date(row.original.createdAt), "dd MMMM yyyy", {
        locale: fr,
      });
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          const response = await fetch(
            `/api/admin/contacts/${row.original.id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            toast.success("Message supprimé avec succès");
            window.location.reload();
          } else {
            throw new Error("Erreur lors de la suppression");
          }
        } catch (error) {
          toast.error("Erreur lors de la suppression", {
            description:
              error instanceof Error ? error.message : "Erreur inconnue",
          });
        }
      };

      return <DeleteDialog onConfirm={handleDelete} />;
    },
  },
];
