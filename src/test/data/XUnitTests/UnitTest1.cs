using Xunit;

namespace XUnitTests;

public class UnitTest1
{
    [Theory]
    [InlineData(2)]
    [InlineData(3)]
    public void Test1(int foo)
    {

    }
}
