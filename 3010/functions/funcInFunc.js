var studentIds = [30,10,20,5,100];
studentIds.sort(function(num1, num2) {
  return num1 - num2;
});
document.write(studentIds);