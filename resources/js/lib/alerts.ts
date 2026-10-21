// resources/js/lib/alerts.ts

import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

export function confirmDelete(itemName: string): Promise<boolean> {
    return Swal.fire({
        title: 'Tem certeza?',
        text: `Deseja realmente excluir ${itemName}? Esta ação não pode ser desfeita.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sim, excluir',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    }).then((result) => result.isConfirmed);
}

export function showSuccess(message: string): void {
    void Toast.fire({
        icon: 'success',
        title: message,
    });
}

export function showError(message: string): void {
    void Swal.fire({
        title: 'Erro!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Entendi',
    });
}