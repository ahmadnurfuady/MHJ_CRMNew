import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiBoardsCards, customBoardCards, defaultBoard, defaultDemoCards, element, generateRandomNumber, generateRandomUsers, taskPriority, users, } from '@/core/data/kanban';
export const useKanban = defineStore('kanban', () => {
    const demoCards = ref(defaultDemoCards);
    const customCards = ref(customBoardCards);
    const apiBoard = ref(apiBoardsCards);
    function getBadgeClass(priority) {
        if (priority === 'Low')
            return 'success';
        if (priority === 'Medium')
            return 'primary';
        if (priority === 'Urgent')
            return 'danger';
        return 'secondary';
    }
    function generateRandomUser() {
        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
    }
    function randomTaskPriority() {
        const randomIndex = Math.floor(Math.random() * taskPriority.length);
        return taskPriority[randomIndex];
    }
    function newCard(boards) {
        boards.addCard = true;
    }
    function addCard(boards) {
        const user = generateRandomUser();
        const newCard = {
            id: Math.floor(Math.random() * 10000),
            title: boards.newCardTitle || '',
            userName: user.name,
            userProfile: user.profile || '',
            date: new Date().toLocaleDateString(),
            taskPriority: randomTaskPriority(),
            comments: generateRandomNumber(),
            attachment: generateRandomNumber(),
            members: generateRandomUsers(),
        };
        boards.cards.push(newCard);
        boards.newCardTitle = '';
        cancel(boards);
    }
    function cancel(boards) {
        boards.addCard = false;
        boards.newCardTitle = '';
    }
    function addDefaultBoard() {
        const newBoard = structuredClone(defaultBoard); // deep clone
        apiBoard.value.push(newBoard);
    }
    function addInReview(index) {
        const board = apiBoard.value.find((card) => card.title == 'In Review');
        if (board) {
            const newElement = structuredClone(element); // deep clone
            if (index) {
                board.cards.splice(1, 0, newElement);
            }
            else {
                board.cards.push(newElement);
            }
        }
    }
    function removeProgressBoard() {
        const board = apiBoard.value.find((card) => card.title == 'In Progress');
        if (board) {
            apiBoard.value.splice(apiBoard.value.indexOf(board), 1);
        }
    }
    function removeReviewElement() {
        const board = apiBoard.value.find((card) => card.title == 'In Review');
        if (board && board.cards.length) {
            board.cards.pop();
        }
    }
    return {
        demoCards,
        customCards,
        apiBoard,
        getBadgeClass,
        newCard,
        addCard,
        cancel,
        addDefaultBoard,
        addInReview,
        removeProgressBoard,
        removeReviewElement,
    };
});
