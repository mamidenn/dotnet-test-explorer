using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MSTestTests;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    [Ignore]
    public void TestMethod1()
    {
        Assert.Fail();
    }
}
