'use strict';

angular.module('noterious')
  .controller('BoardsCtrl', function (currentUser , BoardsModel) {
    var ctrl = this;

    ctrl.loading = false;

    ctrl.newBoard = {
      title: '',
      description: '',
      isPublic: false
    };
    
    ctrl.boards = [];

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newBoard = {
        title: '',
        description: '',
        isPublic: true
      };
    };

    ctrl.getBoards = function () {
      ctrl.boards = [
        {
          description: "Anything and everything!",
          isPublic: true,
          title: "Random Ideas"
        },
        {
          description: "BizDev Ideas",
          isPublic: false,
          title: "Hustle"
        },
        {
          description: "this is a test",
          isPublic: false,
          title: "testing"
        }
      ];
    };

    ctrl.createBoard = function (board, isValid) {
      console.log(ctrl.boards);
      if (isValid) {
        ctrl.loading = true;
        ctrl.boards.push(angular.copy(board));
        ctrl.resetForm();
      }
    };

    ctrl.updateBoard = function (boardId, board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        ctrl.boards[boardId] = angular.copy(board);
        ctrl.cancelEditing();
      }
    };

    ctrl.deleteBoard = function (boardId) {
      ctrl.loading = true;
      // DELETE BOARD
      ctrl.cancelEditing();
    };

    ctrl.setEditedBoard = function (boardId, board) {
      ctrl.editedBoardId = boardId;
      ctrl.editedBoard = angular.copy(board);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentBoard = function (boardId) {
      return ctrl.editedBoard !== null && ctrl.editedBoardId === boardId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedBoardId = null;
      ctrl.editedBoard = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoards();
  });
